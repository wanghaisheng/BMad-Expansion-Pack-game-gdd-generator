Param(
  [Parameter(Mandatory = $true)] [string] $Source,
  [Parameter(Mandatory = $true)] [string] $OutDir
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if (!(Test-Path -Path $Source)) { throw "Source file not found: $Source" }
if (!(Test-Path -Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force | Out-Null }

$bytes = [System.IO.File]::ReadAllBytes($Source)
$content = [System.Text.Encoding]::UTF8.GetString($bytes)

function Get-Section([string] $startPattern, [string] $endPattern) {
  $start = [regex]::Match($content, $startPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  if (-not $start.Success) { return "" }
  $startIdx = $start.Index
  if ([string]::IsNullOrEmpty($endPattern)) {
    return $content.Substring($startIdx).Trim()
  }
  $end = [regex]::Match($content, $endPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  if ($end.Success -and $end.Index -gt $startIdx) {
    return $content.Substring($startIdx, $end.Index - $startIdx).Trim()
  }
  return $content.Substring($startIdx).Trim()
}

# Mappings based on demo document structure
$overview = (Get-Section "##.*文档概览" "##.*第一阶段") + "`n`n" + (Get-Section "##.*第一阶段" "##.*第二阶段")
$gameplay = Get-Section "##.*第二阶段" "##.*第三阶段"
$story = Get-Section "###\s*3\.1\s*叙事设计" "###\s*3\.2\s*美术设计"
$art = Get-Section "###\s*3\.2\s*美术设计" "###\s*3\.3\s*音频设计"
$audio = Get-Section "###\s*3\.3\s*音频设计" "###\s*3\.4\s*用户界面设计"
$interface = Get-Section "###\s*3\.4\s*用户界面设计" "##.*第四阶段"
$technical = Get-Section "##.*第四阶段" "##.*第五阶段"
$management = Get-Section "##.*第五阶段" ""

function Write-File([string] $path, [string] $header, [string] $body) {
  $full = "# $header`n`n$body"
  Set-Content -Path $path -Value $full -Encoding UTF8
}

# Write mapped sections
Write-File (Join-Path $OutDir "3_Game Overview.md") "PandaHabit - Game Overview" $overview
Write-File (Join-Path $OutDir "4_Gameplay and Mechanics.md") "PandaHabit - Gameplay and Mechanics" $gameplay
Write-File (Join-Path $OutDir "5_Story, Setting and Character.md") "PandaHabit - Story, Setting and Character" $story

# Append audio to Game Art
$artCombined = $art + "`n`n## Audio Design`n`n" + $audio
Write-File (Join-Path $OutDir "10_Game Art.md") "PandaHabit - Game Art" $artCombined

Write-File (Join-Path $OutDir "7_Interface.md") "PandaHabit - Interface" $interface
Write-File (Join-Path $OutDir "9_Technical.md") "PandaHabit - Technical" $technical
Write-File (Join-Path $OutDir "12_Management.md") "PandaHabit - Management" $management

Write-Output "Assembled core sections to: $OutDir"

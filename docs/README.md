---
id: readme
title: 关于此Mod
sidebar_label: 关于此Mod
---

# Minecraft Transit Railway 3.0

Minecraft Transit Railway_是一个基于香港地铁、伦敦地铁和纽约地铁的[Minecraft mod](https://minecraft.gamepedia.com/Mods)。它将仿真的火车与其他铁路设施和物品一起添加到游戏中。有了这个MOD，就有可能在你的世界里建立一个功能齐全的铁路系统

[![视频预告片](https://github.com/jonafanho/Minecraft-Transit-Railway/blob/master/images/footer/video-preview.png)](https://www.youtube.com/watch?v=1cZfU7t4cAk)

请向作者报告任何你发现的问题或Bug，作者会谢谢你的。 请在[todo list](https://github.com/jonafanho/Minecraft-Transit-Railway/projects/2)来查看目前已知的问题。

## 下载和安装

请到[CurseForge页面](https://www.curseforge.com/minecraft/mc-mods/minecraft-transit-railway)下载
MOD或查看项目信息。

## 指南

在GitHub上有一个[新的英文Wiki](https://github.com/jonafanho/Minecraft-Transit-Railway/wiki)，是关于这个mod的。
看一下吧。

## 贡献

### 帮助翻译这个mod!

Minecraft Transit Railway Mod的[Crowdin网站](https://crwd.in/minecraft-transit-railway)已经开通!

Crowdin是一个云上的翻译平台，让愿意为Mod翻译做贡献的人进行翻译。有了你的帮助，我们可以把这个MOD翻译成许多不同的语言。你可以创建一个免费的帐户来开始翻译。

[![Crowdin](https://badges.crowdin.net/minecraft-transit-railway/localized.svg)](https://crowdin.com/project/minecraft-transit-railway)

### 添加新功能 

1. 在[本Mod的Github页面](https://github.com/jonafanho/Minecraft-Transit-Railway)fork这个储存库。
1. 在你fork的仓库里，基于开发版本的分支创建一个新的分支
1. 将你的修改提交到新的分支
1. 发出Pull Requests，将你的分支合并到该仓库的开发版本的分支中。

### 构建

要构建mod，在项目的根目录下运行以下命令。

```
gradlew build -PbuildVersion=<minecraft版本>。
```

mod的jar文件应该在以下目录中生成。

```
<root>/build/release/MTR-<fabric|forge>-<minecraft version>-<mod version>.jar
```
具体的构建教程可以查看[这里](http://blog.cmbself.top/?p=38)

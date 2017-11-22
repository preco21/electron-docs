---

**DEPRECATED** | This repository has been deprecated in favor of multilangual support of the [Electron official documentation](https://electronjs.org/docs).

---

# [![Electron Logo](http://electron.atom.io/images/electron-logo.svg)](http://electron.atom.io/)

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev)
[![Build Status](https://travis-ci.org/preco21/electron-docs.svg?branch=source)](https://travis-ci.org/preco21/electron-docs)

**This book currently only supports Korean translation of Electron docs. If you are looking for original docs, please check [upstream docs](https://github.com/electron/electron/blob/master/docs/README.md). Original English docs and other translations will be added later!**

Electron 프레임워크는 JavaScript, HTML 그리고 CSS를 사용하여 Cross-Platform 데스크톱 어플리케이션을 개발할 수 있도록 해주는 프레임워크입니다. [Node.js](https://nodejs.org/)와 [Chromium](http://www.chromium.org)을 기반으로 만들어졌으며 [Atom Editor](https://github.com/atom/atom)에서 사용하고 있습니다. 더 많은 어플리케이션은 [이곳](http://electron.atom.io/apps)에서 확인하세요.

Electron에 대한 중요한 알림을 받고 싶다면 Twitter에서 [@ElectronJS](https://twitter.com/electronjs)를 팔로우 하세요.

## 다운로드

Linux, Windows, OS X 용으로 미리 빌드된 Electron 바이너리와 디버그 심볼이 준비되어 있습니다. [releases](https://github.com/electron/electron/releases) 페이지에서 받아 볼 수 있습니다.

또한 [`npm`](https://docs.npmjs.com/)을 통해 미리 빌드된 Electron 바이너리를 설치할 수도 있습니다:

```sh
# 개발 의존성 모듈 형태로 설치합니다.
npm install --save-dev electron

# $PATH에 `electron` 커맨드를 등록하고 전역에 설치합니다.
npm install --global electron
```

## 시작하기

[`electron/electron-quick-start`](https://github.com/electron/electron-quick-start) 저장소를 클론하여 Electron을 간단히 접해볼 수 있습니다.

## 커뮤니티

한국 커뮤니티로는 [`electron-kr`][electron-kr]이 있습니다.

[awesome-electron](https://github.com/sindresorhus/awesome-electron) 프로젝트에 커뮤니티가 운영중인 유용한 예시 어플리케이션과 도구, 리소스가 있으니 참고해주세요.

## 문제 해결

Electron은 활발하게 개발되고 있는 프레임워크입니다. 혹시 버그를 발견했다면 [`electron-kr`][electron-kr]의 Slack 채팅에서 사람들과 의논하거나, [이슈](https://github.com/electron/electron/issues/new)를 생성하여 도움을 받을 수도 있습니다.

## 이 책은 무엇인가요?

이 문서는 Electron 프레임워크의 한국어 참조 문서 `GitBook` 배포판입니다. 본 문서는 [`upstream`][upstream]을 기반으로 매일 업데이트됩니다.

**주의:** 이 문서는 가장 최신 버전인 개발 브랜치를 반영하므로 일부 API는 기존 버전의 Electron에서 작동하지 않을 수 있습니다.

## 이 책에 기여하기

문서 내의 오타 및 오역 수정은 [`upstream`][upstream]으로 PR을 넣어주세요.

이 책에 제안 사항이 있다면 [이슈](https://github.com/preco21/electron-docs/issues/new)를 생성해주세요!

## 라이센스

[MIT](http://preco.mit-license.org/)

[upstream]: https://github.com/electron/electron
[electron-kr]: http://www.meetup.com/electron-kr/

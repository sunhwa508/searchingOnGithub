# Github User, repository 포털

## 📽 미리보기

![화면 기록 2021-10-30 오전 12 34 25](https://user-images.githubusercontent.com/61695175/139463041-5d1d81f7-bf33-4b32-99f6-b6ee971bb785.gif)

# 🗓 개발 기간

2021/10/20 ~ 2021/10/27

# 📚 구현 사항

`pages` - userList(유저정보), userRepo(유저 레파지토리)

`components` - Header, Pagination, searchInput, spinner, userItem

`models` - 데이터 타입 정의

`config` - globalEnv

# 🔨 기술스택 및 주요 라이브러리

> React, react-router-dom, Typescript

1. `"react": "^17.0.2"` <br/>
   리액트
2. ` "react-query": "^3.27.0",` <br/>
   비동기 로직 다루기위한 라이브러리
3. `"styled-components": "^5.3.3",` <br/>
   css in js
4. `"dayjs": "^1.10.7",` <br/>
   Date 형식 라이브러리
5. `"shortid": "^2.2.16",` <br/>
   랜덤 id를 생성해주는 라이브러리
6. `"jest": "^27.3.1"` <br/>
   jsdom 테스트를 위한 라이브러리

# 📱 설치 및 시작하는 법

이 프로젝트는 Create React App 으로 생성되었습니다.

> This project was bootstrapped with Create React App.

패키지 매니저는 `yarn` 을 사용합니다.

#### `yarn`

프로젝트에 필요한 npm packages, node_modules 다운로드 합니다.

#### `yarn start`

개발모드로 웹 환경을 시작하는 명령어로
접속주소는 http://localhost:3000(디폴트) 입니다.

#### `yarn build`

빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다.

#### `yarn test`

jest test 명령어로 spec.js 파일을 읽어 테스트를 진행합니다.
(테스트 전 jest.config 파일을 통해 rootDir을 알맞게 설정해주세요)

#### `yarn coverage`

jest test coverage 를 확인합니다.

## 테스트 코드 가이드

1. 컴포넌트 테스트(유닛)

- jest, jsdom을 사용하여 컴포넌트 유닛(UI) 테스트 코드를 작성합니다.

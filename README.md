## 💿 실행 방법

```
$ git clone https://github.com/prgrms-fe-devcourse/FEDC2-7_CSS.git

$ npm install

$ npm run start
```

## 🚀 배포 링크

https://tumblbug.netlify.app/

## 📌 과제 설명 <!-- 어떤 걸 만들었는지 대략적으로 설명해주세요 -->

[텀블벅](https://tumblbug.com/)이라는 클라우드 펀딩 사이트를 CSS클론코딩 했습니다.

## 👩‍💻 요구 사항과 구현 내용 <!-- 기능을 Commit 별로 잘개 쪼개고, Commit 별로 설명해주세요 -->

- ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white) ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white) 를 사용했습니다.
- 반응형으로 브레이크 포인트로 1800px, 768px, 640px을 주었습니다.
- 아래 부분의 좌우 버튼은 js로 동작하도록 구현했습니다.  
  ![07](https://user-images.githubusercontent.com/87519250/167297388-87bfa6c8-1468-4c08-8795-c13f8a17abe0.jpg)

```
root
├─js
│  └─main.js : 프로젝트 슬라이더 js
├─scss
│  ├─_mixin.scss
│  ├─_header.scss : 헤더 스타일
│  ├─_footer.scss : 푸터 스타일
│  ├─_banner.scss : 하단 배너 스타일
│  ├─_front-page.scss : 상단 main 슬라이더, 인기프로젝트, 주목할만한 프로젝트 스타일
│  ├─_project-card.scss : project card 스타일
│  └─ main.scss : 공통 스타일 및 import
├─static
│  ├─images
│  └─favicon.icon
├─.gitignore
├─index.html
├─package-lock.json
├─package.json
├─README.md
└─webpack.config.js
```

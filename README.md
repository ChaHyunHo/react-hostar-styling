## sass 셋팅

~~~
css 전처리기 셋팅
yarn add node-sass@4.14.1

command + , (설정)
Languages&frameWorks > Tools > File Watchers
File Watchers > add > sass 추가 
~~~

#### sass 설정 (이미지 참조)
<img width="682" alt="스크린샷 2021-05-23 오후 3 35 05" src="https://user-images.githubusercontent.com/38008152/119250671-a4fa5300-bbdc-11eb-91fa-a29f0a23dea2.png">
program에서 node-sass모듈을 찾아서 셋팅해준다.

#### sass m1 셋팅
~~~
현재 node-sass 6.0.0 버전은 다운은 되나 환경셋팅상 버전 에러가남 그래서 4버전이나 5버전을 셋팅해야되는데 m1은 지원안하는듯
 sass dart로 다운로드
yarn add sass -D 
dart sass 다운로드 이후로는 별다른 셋팅없이 
scss확장자 파일 생성 후 사용하면됨 
~~~


#### sass-loader 커스터마이징

~~~
* whebpack.config.js
  {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: getStyleLoaders({
        importLoaders: 3,
        sourceMap: isEnvProduction
          ? shouldUseSourceMap
          : isEnvDevelopment,
      }).concat({
        loader: require.resolve('sass-loader'),
         options: {
          sassOptions: {
            includePaths: [paths.appSrc + "/styles"], // sass로드시 임포트 해당파일에 절대경로 자동 입력
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
          additionalData: `@import 'utils';`, // sass 파일에 utils.scss 파일 모두 임포트
         },
      }),
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
  },

~~~
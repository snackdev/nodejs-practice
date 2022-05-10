# NodeJS 

1. Javascript 의 Runtime 으로써 브라우져 외부에서 V8 엔진(크롬의 엔진)을 실행한다.   

2. Single Process로 실행되며, 요청마다 Thread를 생성하지 않는다. 
    1. 모든 코드는 Async IO의 집합으로 이루어져 있으며, 대부분의 일반적인 JS 라이브러리 모듈도 Async 사상에 기반한 것들이 많다.   
    2. Network, DB 등과 같은 IO 작업시에도, 블로킹하지 않고, 응답이 오면 재실행 하는 방식이다.    
        > ❓ transaction 처리        
        > ❓ http request, response thread

3. 호출 처리 방식
    1. Call stack
        - LIFO 방식으로 처리되며, scope 에 따라 순서대로 실행된다.     
    2. Event Loop    
        - Call stack 다음에 실행된다.     
    3. Job Queue(ES6)    
        - Promise 객체에 의해 생성되며, Call stack이 실행된 후 ASAP 실행된다.    

4. NodeJS 와 Browser 의 차이점     
    1. 모듈의 존재 여부 및 관심사가 다르다.    
        - Browser는 대부분 DOM 객체, Cookie 와 같은 WebAPI 와의 동작이 주요 관심사이나, NodeJS에는 존재하지 않는다.        
        - 반대로, NodeJS의 fileSystem access와 같은 모듈은 Browser에 존재하지 않는다.    
    2. 실행환경을 통제할 수 있다.
        - NodeJS는 어디에 배포하든 NodeJS 버전을 통해 어떤 환경에서 실행되는지 알 수 있다.
        - Browsers는 클라이언트가 어떤 Browser, 환경에서 접근하는지 명확히 알 방법이 여의치 않다.     
        - 이는 빠르게 변하는 JS 버전을 선택할 수 있도록 해준다.    
            - Browser는 환경을 알수 없기 때문에 Babel 등을 통해 transpiling 하는 과정이 필요하다.
            - NodeJS는 commonJS, 와 ES를 혼용가능하다. (require, import)
    
5. V8 엔진
    - 브라우저 독립적인 JS Runtime으로 NodeJS의 기반 엔진이다.   
    - ```c++``` 로 작성되었다.   
    
6. Promise와 async/await
    - callback hell 을 해소하기 위한 대체자로 Promise가 구현됨 (ES2015)
    - Promise의 문법적 boilerplate를 해소하고자 async/await 등장 (ES2017)   
        ```async/await is built on promises.```    

7. Event Emitter
    - ```Spring Event Queue``` 처럼 활용 가능
    
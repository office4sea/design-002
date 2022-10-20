# design-002
스토어 서비스(금강상사)

## 리소스

[부트스트랩](https://getbootstrap.kr/)

적용버전(5.2.2)

### 폴더구조

[고객용(hpg)](hpg/index.html)
직원용(wrk)
관리자(adm)

```sh
root
    /hpg # 고객용(homepage)
        # 구글 플레이 스토어 구조 참고
        # https://play.google.com/store/games
        /api # JSON 데이터
            /v1
    /wrk # 직원용(work)
        /api # JSON 데이터
    /adm # 관리자(admin)
        /api # JSON 데이터

    /img # 이미지
    /libs # 웹 리소스, 라이브러리
        /bootstrap # 부트스트랩
```

### 아이콘 생성방법

https://goodmemory.tistory.com/m/119

### 자바스크립트

document 객체 설명: http://www.tcpschool.com/javascript/js_dom_document

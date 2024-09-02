
## HTTP Status codes - [Reference](https://hongong.hanbit.co.kr/http-%EC%83%81%ED%83%9C-%EC%BD%94%EB%93%9C-%ED%91%9C-1xx-5xx-%EC%A0%84%EC%B2%B4-%EC%9A%94%EC%95%BD-%EC%A0%95%EB%A6%AC/)
```
1XX: Informational(정보 제공)
- 임시 응답으로 현재 클라이언트의 요청까지는 처리되었으니 계속 진행하라.

2XX: Success(성공)
클라이언트의 요청이 서버에서 성공적으로 처리되었다

3XX: Redirection(리다이렉션)
완전한 처리를 위해서 추가 동작이 필요함. 주로 서버의 주소 또는 요청한 URI의 웹 문서가 이동되었으니 그 주소로 다시 시도하라는 의미.

4XX: Client Error(클라이언트 에러)
없는 페이지를 요청하는 등 클라이언트의 요청 메시지 내용이 잘못된 경우

5XX: Server Error(서버 에러)
서버 사정으로 메시지 처리에 문제가 발생한 경우. 서버의 부하, DB 처리 과정 오류, 서버에서 익셉션이 발생하는 경우를 의미.
```
```
CONTINUE = 100
- 클라이언트가 요청 헤더에 ‘Expect: 100-continue’를 보냄. 서버가 이를 처리할 수 있으면 100 코드로 응답

OK = 200
- 서버가 요청을 성공적으로 처리함
CREATED = 201
- 요청이 처리되어 새로운 리소스 생성됨
ACCEPTED = 202
- 요청은 접수되었으나, 처리는 완료되지 않음

AMBIGUOUS = 300
- 요청 대상이 다수 조회되어 처리 대상이 불분명함
MOVED_PERMANENTLY = 301
- 새로운 URI로 이동함. 응답 해더 Location에 새로운 URI 전달.
SEE_OTHER = 303
응답 해더 Location에 전달한 위치로 GET 요청 지시
주로 POST 처리 결과를 확인할 GET URI 전달 시 사용

BAD_REQUEST = 400
UNAUTHORIZED = 401
- 해당 리소스 엑세스 권한 없음. 응답 해더 WWW-Authenticate에 필요한 인증 방식 지정
FORBIDDEN = 403
- 해당 리소스 엑세스 금지. 리소스 존재 자체를 숨기고 싶은 경우 404로 응답
NOT_FOUND = 404
- 해당 리소스 찾을 수 없음

INTERNAL_SERVER_ERROR = 500
- 서버에 에러 발생
NOT_IMPLEMENTED = 501
- 요청 URI의 메소드가 서버에 구현되어 있지 않음
BAD_GATEWAY = 502
- 게이트웨이 또는 프록시 역할 서버가 뒷단의 서버로 부터 잘못된 응답을 받음
```

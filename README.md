# 💰 헤데라 HEDERA(HBAR)

### make by AHERA (에헤라)
#### 팀원 : 김다한, 김동근, 윤초희

## 프로젝트 소개

**‘AHERA Project’**
- AHERA(에헤라) 프로젝트는 해시그래프 알고리즘을 통해 보안이나 수수료와 같은 기존 블록체인들의 문제 개선은 물론, 특히 가장 친환경적이라고 불리는 헤데라 블록체인을 지원합니다.
- 프로젝트는 웹 / 크롬 익스텐션 기반의 지갑과 웹 기반 트랜잭션, 블록, 계정 정보 등을 조회하는 익스플로러로 구성되어 있습니다. 또한 로컬 미러 노드를 구축하여 헤데라 네트워크를 빠르고 쉽게 조회할 수 있고 지갑을 통해 계정 생성, 추가, 복구 뿐만 아니라 코인 전송 기능을 제공하여 관련된 트랜잭션 내역과 전송 정보를 익스플로러에서 바로 조회할 수 있습니다.

## 💵Wallet, 🔍Explorer 의 기능

### Wallet
- 웹 / 크롬 익스텐션 기반 지갑
- 중앙 서버 통제 없이 사용자가 직접 지갑 보유
- 계정 발급 기능
- 다 계정 추가 및 관리 기능
- 코인 잔액 조회 기능
- 시드 구문으로 계정 복구 기능
- 코인 전송 / 예약 전송 기능
- 계정 잠금 및 해제 / 로그인 기능 구현
- 트랜잭션 내역 확인 및 익스플로러 연결 기능

### Explorer
- 최신 트랜잭션, 블록, 계정 정보 실시간 조회
- 트랜잭션, 블록, 계정 정보 검색 기능 제공(TX ID, Block Number, Account ID로 검색)
- 이전 트랜잭션 및 블록 정보 조회
- 트랜잭션, 블록 상세 정보 조회
- 계정 상세 정보 및 계정별 최신 트랜잭션 내역 조회
- 코인 현재가, 24시간 변동, 볼륨, 마켓 캡 실시간 조회
- 코인 공급량, 유통량 실시간 조회

### Node
- 노드를 로컬 네트워크에 구성하고 동기화

### Daemon
- 실시간으로 트랜잭션, 블록 정보를 모니터링하여 DB와 동기화

## 프로젝트 추가 정보
- Wiki : [노션 정보](https://www.notion.so/codestates/6-AHERA-d509b43f2b1d42ec83b46696fe5a7b26)

## 실행 방법
- 각 디렉토리 별 README 참조

## 추천 사양
- Node.js >= v14.x and <= v16.x
  - Node version check: node -v
- NPM >= v6.14.17 and <= v8.5.0
  - NPM version check: npm -v
- Docker >= v20.10.x
  - Docker version check: docker -v
- Docker Compose => v1.28.0 && <= 1.29.2
 - Docker Compose version check: docker-compose -v

## 파일 구조
 - explorer
   - frontend : explorer 웹 페이지
   - server : daemon 서버
 - node : 로컬 노드 서버 구성
 - wallet : 크롬 익스텐션 기반의 월렛
 - web-weallet: 웹 페이지 월렛

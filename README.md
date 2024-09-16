# 💬 익명 문답 커뮤니티, 오픈마인드

![image](https://github.com/user-attachments/assets/0594d5db-795c-44ca-aba5-b958fa097ab9)

<br>
<br>

배포 URL: https://openmind-team16.netlify.app/<br>
발표자료 URL: https://www.miricanvas.com/v/137ja58<br>
프로젝트 기간: 2024.04.30 ~ 2024.05.17

<br>

# 💫 프로젝트 설명

### ☝🏻 프로젝트 명 및 선정 이유

OpenMind 오픈마인드<br>
첫 프로젝트임을 감안한 난이도 선정, 요구사항을 기간 내에 모두 충족이 가능한가를 고려해 이 주제로 선택했습니다.

### ✌🏻 프로젝트 설명

익명으로 서로 질문하고 답할 수 있는 플랫폼입니다.

<br>

# 🧑🏻‍💻 팀원 구성 및 역할 👩🏻‍💻 (Sprint 6기 Part2 16팀)

<img width="1085" alt="image" src="https://github.com/user-attachments/assets/9f23e800-ca09-4366-9d50-2585065d4875">
<br><br>이번 프로젝트에서 저희는 Ui 파트와 Service 파트로 나누어 진행해보았습니다.<br><br>
- ui: 보이는 부분, presentational 컴포넌트를 제작합니다.<br>
- service: 로직 부분, container 컴포넌트를 제작합니다.<br><br>

# 🛠️ 기술스택
<img width="1189" alt="image" src="https://github.com/user-attachments/assets/5cc6efa2-fa3a-4748-88d6-5bf92ef52e29">


#### 프레임워크 & 패키지

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### 라이브러리

![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

#### Styling

![css-module](https://img.shields.io/badge/CSS_Module-239120?&style=for-the-badge&logo=css3&logoColor=white)

#### 코드 포매터

<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"> 

#### 협업툴

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">

#### 배포

<img src="https://img.shields.io/badge/netlify-00C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white">

<br>

# 🍀 기획
![image](https://github.com/user-attachments/assets/732cbccd-6371-426e-9721-f0ec15ef468b)

https://www.tldraw.com/r/m6QceZ8HuHosZPBnFrdnS?d=v-259.-373.11599.6162.page

프로젝트 진행 절차

1. 프로젝트 목표
2. 기술 기획 목표
   <br>a. 목표: 무엇을 개발할 것인가(어떤 기능, ui)
   <br>b. 기술 스택: 그 목표를 개발하기 위해 무엇이 필요한가
3. 폴더 구조 / 코드 컨벤션
4. 분배
   <br>a. 팀 분배
   <br>b. 작업 단위 분배
5. ui 모델링(컴포넌트화)
6. 프로젝트 관리 / 배포 전략
7. 구현

탄탄한 기획 과정에 긴 시간을 투자해서 오히려 더욱 안정적인 구현이 가능했습니다.
<br>
<br>

# 📑 각 페이지 소개

## 랜딩페이지
![image](https://github.com/user-attachments/assets/98efca83-041b-462e-a5d3-9eb649d4f4ba)
- 이름을 입력하면 피드가 생성되면서 답변하기 페이지로 이동합니다.
- 질문하러 가기를 통해 질문을 받는 것이 아닌 질문을 하러 갈 수 있습니다.
<br>

## 질문 목록 페이지
![image](https://github.com/user-attachments/assets/1bc22ce8-41bd-44fa-b44e-bf993ac91dd5)
- 답변하기 클릭 시에, 생성된 id가 있으면 답변하기로, 없으면 메인페이지로 이동합니다.
- 답변자의 개별 피드로 이동할 수 있습니다.
<br>

## 개별 피드 페이지
![2024-09-1612 47 14-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/eb21694b-f189-4d29-8aa1-20f6d2d69cf7)
- 질문 작성하기 모달을 통해 질문을 작성할 수 있습니다.
- 피드의 url을 복사해 공유할 수 있습니다.
<br>

## 답변하기 페이지
![image](https://github.com/user-attachments/assets/5ff9b430-c735-455d-8109-663155f5693e)
![2024-09-162 03 32-ezgif com-speed](https://github.com/user-attachments/assets/3bee17aa-3d8f-47dc-9869-eb1db1af487f)
- 들어온 질문에 대해 답변, 답변 수정, 답변 거절, 답변 삭제, 질문 삭제 등의 행동이 가능합니다.
- 피드 전체를 삭제할 수 있습니다.
<br>




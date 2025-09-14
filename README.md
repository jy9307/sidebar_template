# Next.js Sidebar Template

🚀 이 레포지토리는 **Next.js + TailwindCSS** 기반의 **사이드바 레이아웃 템플릿**입니다.  
새 프로젝트를 시작할 때 공통 레이아웃을 그대로 활용하고, 페이지 내용만 교체하면 빠르게 개발을 시작할 수 있습니다.  

---

## 📦 설치 방법

### 1. 템플릿으로 새 레포 만들기
1. 이 레포 상단의 **"Use this template"** 버튼 클릭
2. 새 레포지토리 이름 입력 → "Create repository" 선택
3. 새로 만들어진 레포를 로컬로 클론

```bash
git clone https://github.com/USERNAME/NEW-REPO-NAME.git
cd NEW-REPO-NAME
```

---

## 🛠️ 실행 방법

```bash
npm install
npm run dev
```

- 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속
- 기본 사이드바 + 페이지 레이아웃 확인 가능

---

## 🧱 프로젝트 구조

```
/app
  /layout.js      # 전체 레이아웃 (Sidebar + 메인 콘텐츠)
  /page.js        # 홈 페이지
  /about/page.js  # 예시 About 페이지
/components
  /Sidebar.js     # 사이드바 컴포넌트
/styles
  /globals.css    # TailwindCSS 글로벌 스타일
```

---

## 🎨 레이아웃 커스터마이징

### 사이드바 메뉴 수정
`/components/Sidebar.js` 안에서 메뉴를 수정하세요.

```jsx
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
```

메뉴를 추가하면 자동으로 새로운 페이지와 연결됩니다.  

---

## ➕ 새 페이지 추가하기

예: `app/contact/page.js`

```jsx
export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact</h1>
      <p>This is the contact page content.</p>
    </div>
  );
}
```

→ 이제 `/contact` 경로로 접속하면 페이지가 표시됩니다.

---

## 🌐 GitHub에 새 프로젝트로 업로드

```bash
git init
git add .
git commit -m "Start from sidebar template"
git branch -M main
git remote add origin https://github.com/USERNAME/NEW-REPO.git
git push -u origin main
```

---

## 📚 기술 스택

- [Next.js](https://nextjs.org/) (v13 이상, App Router)
- [Tailwind CSS](https://tailwindcss.com/)

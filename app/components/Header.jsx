'use client'

export default function Header () {
  return <header className="row g-0 py-3 gap-2 align-items-center justify-content-center" data-testid="header">
      <div className="img col-auto bg-dark rounded-3 ps-1 py-1">
        <img src="/rickandmortycharacters/assets/images/Rick.png" width="32" height="64" alt="" className="rick"/>
        <img src="/rickandmortycharacters/assets/images/Morty.png" width="32" height="64" alt="" className="morty"/>
      </div>
      <h1 className="col-auto m-0">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
    <style jsx> {
      `.img {
        transform: rotate(-5deg);
        overflow: hidden;
        min-width: 70px;
      }
      .morty {
        margin-left: -2px;
        margin-top : -5px;
      }
      `
    }
    </style>
  </header>;
}

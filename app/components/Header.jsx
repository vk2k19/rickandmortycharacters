'use client'

export default function Header () {
  return <header className="row py-3 align-items-center justify-content-center" data-testid="header">
      <div className="img col-auto bg-dark">
        <img src="/rickandmortycharacters/assets/images/Rick.png" width="32" height="64" alt="" className="rick"/>
        <img src="/rickandmortycharacters/assets/images/Morty.png" width="32" height="64" alt="" className="morty"/>
      </div>
      <h1 className="col-auto m-0">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
    <style jsx> {
      `.img {
        transform: rotate(-5deg);
        padding-left: 4px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-radius: 10px;
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

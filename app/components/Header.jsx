'use client'

export default function Header () {
  return <header className="header" data-testid="header">
    <div className="flex">
      <div className="img">
        <img src="/assets/images/Rick.png" width="32" height="64" alt="" className="rick"/>
        <img src="/assets/images/Morty.png" width="32" height="64" alt="" className="morty"/>
      </div>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
    </div>
    <style jsx> {
      `.flex {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        margin: 16px auto;
      }
      .img {
        transform: rotate(-5deg);
        background-color: #4b4f5a;
        padding-left: 4px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-radius: 10px;
        overflow: hidden;
        min-width: 70px;
      }
      h1 {
        margin: 0
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

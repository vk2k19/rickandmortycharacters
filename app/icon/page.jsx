/* Components */
import Image from "next/image";

export default function IndexPage() {
  return (
    <>
      <main className="container" style={{ position: "relative", margin: 20, width: 1041, boxSizing: 'border-box', overflow: 'hidden', padding: 0 }}>
        {/* <Image src="/assets/images/p.jpg" width={1041} height={640} alt="" /> */}
        <Image src="/assets/images/n.png" width={1041} height={640} alt=""  />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <div className="" style={{
            'textShadow': '2px 2px #fe6a81',
            color: "white",
            textAlign: 'center',
            fontWeight: 'bold', 
            boxSizing: 'border-box',
            fontSize: "32px",
            paddingTop: 15,
            paddingBottom: 15,
            background: 'rgba(0,0,0, .05)',
          }}>
          नया साल आया बनकर उजाला,
          <br />खुल जाए आपकी किस्मत का ताला,
          </div>
          <div className="" style={{
            'textShadow': '2px 2px #fe6a81',
            color: "white",
            textAlign: 'center',
            fontWeight: 'bold', 
            boxSizing: 'border-box',
            fontSize: "32px",
            marginTop: 395,
            background: 'rgba(0,0,0, .05)',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          हमेशा आप पर मेहरबान रहे ऊपर वाला, <br />ये दुआ करता है आपका ये चाहने वाला!
          </div>
        </div>
      </main>
    </>
  );
}

export const metadata = {
  title: "Rick and Morty characters",
  description: "List and filter your favorite rick and morty characters",
};

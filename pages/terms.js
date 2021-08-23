import Head from 'next/head'

export default function Terms() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
      <link rel="icon" href="/images/favicon.png" />
        <meta property="og:title" content="Immortal Inu" key="ogtitle" />
        <meta property="og:description" content="Immortal Inu is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://immortalinu.com/" key="ogurl"/>
        <meta property="og:image" content="https://immortalinu.com/images/logo.png" key="ogimage"/>
        <meta property="og:site_name" content="https://immortalinu.com/" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="https://immortalinu.com/" key="twdomain" />
        <meta property="twitter:url" content="https://immortalinu.com/" key="twurl" />
        <meta name="twitter:title" content="Immortal Inu's" key="twtitle" />
        <meta name="twitter:description" content="Immortal Inu is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT." key="twdesc" />
        <meta name="twitter:image" content="https://immortalinu.com/images/logo.png" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/logo.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around PermanentMarker-Regular">

              <a href="https://twitter.com/0xKhun" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/gGgshkVWW4" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>

          </div>

        </div>

        <div className="md:w-2/3 w-4/5 " id="home">




              <div id="roadmap" className="">
                  <br/>
                  <br/>
                  <br/>
                  <br/>
              <h2 className="text-6xl text-center PermanentMarker-Regular text-blau my-4">TERMS & CONDITIONS</h2>
              <ul className="">
                <li className="text-2xl text-white my-6  PermanentMarker-Regular">The Immortal Inu's are a collection of digital artworks (NFTs) running on the Ethereum network. This website is only an interface allowing participants to exchange digital collectibles. Users are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions and contracts generated by this website before approval. Furthermore, as the Immortal Inu smart contract runs on the Ethereum network, there is no ability to undo, reverse, or restore any transactions.</li>

                <li className="text-2xl text-white my-6  PermanentMarker-Regular">This website and its connected services are provided “as is” and “as available” without warranty of any kind. By using this website you are accepting sole responsibility for any an all transactions involving Immportal Inu digital collectibles. </li>
                <li className="text-2xl text-white my-6  PermanentMarker-Regular">The tutorials provided are done so for educational purposes only and are done so without warranty. 0xKhun no _minLabs take no responsibility for any loss that is incurred by following the tutorials.    </li>
                <br/>
                <br/>
              <h3 className="text-6xl text-left PermanentMarker-Regular text-purp my-4">OWNERSHIP </h3>

                <li className="text-2xl text-white my-6  PermanentMarker-Regular"> i. You Own the NFT. Each Immortal Inu is an NFT on the Ethereum blockchain. When you purchase an NFT, you own the underlying Immortal Inu, the Art, completely. Ownership of the NFT is mediated entirely by the Smart Contract and the Ethereum Network: at no point may we seize, freeze, or otherwise modify the ownership of any Immortal Inu.</li>

                <li className="text-2xl text-white my-6  PermanentMarker-Regular"> ii. Personal Use. Subject to your continued compliance with these Terms, _minLabs grants you a worldwide, royalty-free license to use, copy, and display the purchased Art, along with any extensions that you choose to create or use, solely forthe following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the purchase and sale of your Immortal Inu / NFT, provided that the marketplace cryptographically verifies each Immortal Inu owner’s rights to display the Art for their Immortal Inu to ensure that only the actual owner can display the Art; or (iii) as part of a third party website or application that permits the inclusion, involvement, or participation of your Immortal Inu, provided that the website/application cryptographically verifies each Immortal Inu owner’s rights to display the Art for their Immortal Inu to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner ofthe Immortal Inu leaves the website/application.</li>

                <li className="text-2xl text-white my-6  PermanentMarker-Regular"> iii. Commercial Use. Subject to your continued compliance with these Terms, _mintLabs grants you an unlimited, worldwide license to use, copy, and display the purchased Art for the purpose of creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products (T-Shirts etc.) displaying copies of the Art. For the sake of clarity, nothing in this Section will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of Immortal Inus generally, provided that the marketplace cryptographically verifies eachImmortal Inu owner’s rights to display the Art for their Immortal Inu to ensure that only the actual owner can display the Art; (ii) owning or operating a third party website or application that permits the inclusion, involvement, or participation of Immortal Inus generally, provided that the third party website or application cryptographically verifies each Immortal Inu owner’s rights to display the Art for theirImmortal Inu to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Purchased Immortal Inu leaves the website/application; or (iii) earning revenue from any of the foregoing.</li>


              </ul>



              </div>
          </div>
    </div>
    )
  }

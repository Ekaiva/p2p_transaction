import React from "react";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import Modal from "react-modal/lib/components/Modal";

//  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
//   });
  
//  Enable session (triggers QR Code modal)


const LoginWithEth = () => {

    // await provider.enable();


  return (
    <div>
      <Modal>
          
        <button>Continue</button>
      </Modal>
    </div>
  );
};

export default LoginWithEth;

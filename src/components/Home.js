import React, { useEffect } from 'react';
import { hooks, metaMask } from '../connectors/metamask';
import { walletShorten } from '../helpers/formatter';

const { useChainId, useAccounts, useIsActive, useIsActivating } = hooks;

const Home = () => {
  const chainId = useChainId();
  const account = useAccounts();
  const isActive = useIsActive();
  const isActivating = useIsActivating();

  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask');
    });
  }, []);

  const connect = async () => {
    try {
      await metaMask.activate();
    } catch (error) {
      console.error(error);
    }
  };

  const disconnect = async () => {
    try {
      void metaMask.resetState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="content">
        {isActive ? (
          <>
            <p>{walletShorten(account.toString())}</p>
            <p>ChainId - {chainId}</p>
          </>
        ) : null}
        <button onClick={isActive ? disconnect : connect} disabled={isActivating}>
          {isActive ? 'Disconnect' : 'Connect'}
        </button>
      </div>
      <div className="orb">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Home;

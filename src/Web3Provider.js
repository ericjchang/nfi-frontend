import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { hooks as metaMaskHooks, metaMask } from './connectors/metamask';

const connectors = [[metaMask, metaMaskHooks]];

export default function Web3Provider() {
  return <Web3ReactProvider connectors={connectors} />;
}

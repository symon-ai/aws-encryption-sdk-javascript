// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  KmsKeyringClass,
  KmsKeyringInput,
  KMSConstructible,
  KmsClientSupplier,
  getClient,
  limitRegions,
  excludeRegions,
  cacheClients,
} from '@symon-ai/aws-crypto-kms-keyring'
import {
  immutableClass,
  KeyringNode,
  Newable,
  NodeAlgorithmSuite,
} from '@symon-ai/aws-crypto-material-management-node'
import { KMSClient, KMSClientConfig } from '@aws-sdk/client-kms'
import { version } from './version'
const getKmsClient = getClient(KMSClient, {
  customUserAgent: `AwsEncryptionSdkJavascriptNodejs/${version}`,
})
const cacheKmsClients = cacheClients(getKmsClient)

export type KmsKeyringNodeInput = Partial<KmsKeyringInput<KMSClient>>
export type KMSNodeConstructible = KMSConstructible<
  KMSClient,
  KMSClientConfig
>
export type KmsNodeClientSupplier = KmsClientSupplier<KMSClient>

export class KmsKeyringNode extends KmsKeyringClass<NodeAlgorithmSuite, KMSClient>(
  KeyringNode as Newable<KeyringNode>
) {
  constructor({
    clientProvider = cacheKmsClients,
    keyIds,
    generatorKeyId,
    grantTokens,
    discovery,
  }: KmsKeyringNodeInput = {}) {
    super({ clientProvider, keyIds, generatorKeyId, grantTokens, discovery })
  }
}
immutableClass(KmsKeyringNode)

export {
  getKmsClient,
  cacheKmsClients,
  getClient,
  limitRegions,
  excludeRegions,
  cacheClients,
  KMSClient as KMS
}

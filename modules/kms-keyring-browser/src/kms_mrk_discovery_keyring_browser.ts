// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AwsKmsMrkAwareSymmetricDiscoveryKeyringClass,
  AwsKmsMrkAwareSymmetricDiscoveryKeyringInput,
} from '@symon-ai/aws-crypto-kms-keyring'
import {
  WebCryptoAlgorithmSuite,
  WebCryptoEncryptionMaterial,
  WebCryptoDecryptionMaterial,
  EncryptedDataKey,
  immutableClass,
  importForWebCryptoEncryptionMaterial,
  importForWebCryptoDecryptionMaterial,
  KeyringWebCrypto,
  Newable,
} from '@symon-ai/aws-crypto-material-management-browser'
import { KMSClient } from '@aws-sdk/client-kms'

export type AwsKmsMrkAwareSymmetricDiscoveryKeyringWebCryptoInput =
  AwsKmsMrkAwareSymmetricDiscoveryKeyringInput<KMSClient>

export class AwsKmsMrkAwareSymmetricDiscoveryKeyringBrowser extends AwsKmsMrkAwareSymmetricDiscoveryKeyringClass<
  WebCryptoAlgorithmSuite,
  KMSClient
>(KeyringWebCrypto as Newable<KeyringWebCrypto>) {
  declare client: KMSClient

  constructor({
    client,
    discoveryFilter,
    grantTokens,
  }: AwsKmsMrkAwareSymmetricDiscoveryKeyringWebCryptoInput) {
    super({ client, discoveryFilter, grantTokens })
  }

  async _onEncrypt(
    material: WebCryptoEncryptionMaterial
  ): Promise<WebCryptoEncryptionMaterial> {
    const _material = await super._onEncrypt(material)

    return importForWebCryptoEncryptionMaterial(_material)
  }

  async _onDecrypt(
    material: WebCryptoDecryptionMaterial,
    encryptedDataKeys: EncryptedDataKey[]
  ): Promise<WebCryptoDecryptionMaterial> {
    const _material = await super._onDecrypt(material, encryptedDataKeys)

    return importForWebCryptoDecryptionMaterial(_material)
  }
}
immutableClass(AwsKmsMrkAwareSymmetricDiscoveryKeyringBrowser)

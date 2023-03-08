// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export * from '@symon-ai/aws-crypto-encrypt-browser'
export * from '@symon-ai/aws-crypto-decrypt-browser'
export * from '@symon-ai/aws-crypto-material-management-browser'
export * from '@symon-ai/aws-crypto-caching-materials-manager-browser'
export * from '@symon-ai/aws-crypto-kms-keyring-browser'
export * from '@symon-ai/aws-crypto-raw-aes-keyring-browser'
export * from '@symon-ai/aws-crypto-raw-rsa-keyring-browser'
export * from '@symon-ai/aws-crypto-web-crypto-backend'

import {
  CommitmentPolicy,
  ClientOptions,
} from '@symon-ai/aws-crypto-material-management-browser'

import { buildEncrypt } from '@symon-ai/aws-crypto-encrypt-browser'
import { buildDecrypt } from '@symon-ai/aws-crypto-decrypt-browser'

export function buildClient(
  options?: CommitmentPolicy | ClientOptions
): ReturnType<typeof buildEncrypt> & ReturnType<typeof buildDecrypt> {
  return {
    ...buildEncrypt(options),
    ...buildDecrypt(options),
  }
}

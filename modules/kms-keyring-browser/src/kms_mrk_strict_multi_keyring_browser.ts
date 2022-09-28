// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { getAwsKmsMrkAwareStrictMultiKeyringBuilder } from '@symon-ai/aws-crypto-kms-keyring'
import {
  MultiKeyringWebCrypto,
  WebCryptoAlgorithmSuite,
} from '@symon-ai/aws-crypto-material-management-browser'
import { getKmsClient } from '.'
import { AwsKmsMrkAwareSymmetricKeyringBrowser } from './kms_mrk_keyring_browser'
import { KMSClient } from '@aws-sdk/client-kms'

export const buildAwsKmsMrkAwareStrictMultiKeyringBrowser =
  getAwsKmsMrkAwareStrictMultiKeyringBuilder<WebCryptoAlgorithmSuite, KMSClient>(
    AwsKmsMrkAwareSymmetricKeyringBrowser,
    MultiKeyringWebCrypto,
    getKmsClient
  )

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  getAwsKmsMrkAwareDiscoveryMultiKeyringBuilder,
  AwsEsdkKMSInterface,
} from '@symon-ai/aws-crypto-kms-keyring'
import {
  MultiKeyringWebCrypto,
  WebCryptoAlgorithmSuite,
} from '@symon-ai/aws-crypto-material-management-browser'
import { getKmsClient } from '.'
import { AwsKmsMrkAwareSymmetricDiscoveryKeyringBrowser } from './kms_mrk_discovery_keyring_browser'

export const buildAwsKmsMrkAwareDiscoveryMultiKeyringBrowser =
  getAwsKmsMrkAwareDiscoveryMultiKeyringBuilder<
    WebCryptoAlgorithmSuite,
    AwsEsdkKMSInterface
  >(
    AwsKmsMrkAwareSymmetricDiscoveryKeyringBrowser,
    MultiKeyringWebCrypto,
    getKmsClient
  )

/**
 * This file is part of the peer-data package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Caller} from './caller';

export interface SignalingEvent {
  type: string;
  caller: Caller;
  callee: Caller;
  data: any;
}

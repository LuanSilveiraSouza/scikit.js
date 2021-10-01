/**
*  @license
* Copyright 2021, JsData. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.

* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* ==========================================================================
*/
import { ArrayType1D, ArrayType2D } from "types";

/**
* Generates an array of dim (row x column) with inner values set to zero
* @param row 
* @param column 
*/
export const zeros = (row: number, column: number): ArrayType1D | ArrayType2D => {
    const zeroData = [];
    for (let i = 0; i < row; i++) {
        const colData = Array(column);
        for (let j = 0; j < column; j++) {
            colData[j] = 0;
        }
        zeroData.push(colData);
    }
    return zeroData;
}


/**
 * Checks if array is 1D
 * @param arr The array 
*/
export const is1DArray = (arr: ArrayType1D | ArrayType2D): boolean => {
    if (
        typeof arr[0] == "number" ||
        typeof arr[0] == "string" ||
        typeof arr[0] == "boolean"
    ) {
        return true;
    } else {
        return false;
    }
}
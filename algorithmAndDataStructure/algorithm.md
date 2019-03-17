## 位运算
## 按位操作
## 排序
### 冒泡排序
原理：从第一个元素开始，依次对比当前元素与下一元素的值，当前元素大就交换位置，这样第一轮就确定最大值并且放在最后。然后每次循环确定 n - 1 大的值，知道最小的值

平均时间复杂度：O(n * n) 空间复杂度：O(1)
```
    // 是否是数组
	function checkArray(arr) {

		return Array.isArray(arr);
	}
	// 交换数据
	function swap(arr, left, right) {

		let rightValue = arr[right];
		arr[right] = arr[left];
		arr[left] = rightValue;
	}
	// 冒泡排序
	function bubble(array) {
		if (!checkArray(array)) return;
		// 两两对比，外层一共 n - 1 次
		for (let i = 1; i < array.length; i++) {
			// 循环出最大的，放入最后
			for (let j = 0; j < array.length - i; j++) {
				// 前面的数比后面的数大则交换
				if (array[j] > array[j + 1])
					swap(array, j, j + 1);
				
			}
		}
		return array;
	}

	console.log(bubble([9, 2, 5, 6, 3, 8, 1, 3, 9, 4, 9, 2, 5, 6, 3, 8, 1, 3, 9, 4, 9, 2, 5, 6, 3, 8, 1, 3, 9, 4]));
```
### 插入排序
原理：第一个元素默认已经被排序，每次循环排序前面 n + 1 个元素，如果当前元素值大就交换，直到所有元素排序完毕

平均时间复杂度：O(n * n) 空间复杂度：O(1)
```
    // 是否是数组
	function checkArray(arr) {

		return Array.isArray(arr);
	}
	// 交换数据
	function swap(arr, left, right) {

		let rightValue = arr[right];
		arr[right] = arr[left];
		arr[left] = rightValue;
	}

	// 插入排序
	function insertion(array) {
		if (!checkArray(array)) return;
		// 两两对比，外层一共 n - 1 次
		for (let i = 1; i < array.length; i++) {
			// 每次排序前 n + 1 个数字，当前大就交换
			for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {

				swap(array, j, j + 1);
			}
		}
		return array;
	}

	console.log(insertion([9, 2, 5, 6, 3, 8, 1, 3, 9, 4, 9, 2, 5, 6, 3, 8, 1, 3, 9, 4, 9, 2, 5, 6, 3, 8, 1, 3, 9, 4]));
```

### 快速排序
对冒泡排序的一种改进。通常认为是大数组的最高效排序
1. 数组中随机选择一个元素作为基准值
2. 循环数组，小于基准值的都放基准值的左边数组，其他的都放基准值的右边数组
3. 对左右两个数组，不断重复第一步和第二步，直到只剩下一个元素为止

平均时间复杂度：O(n * log n) 空间复杂度：O(log n)

```
    // 是否是数组
	function checkArray(arr) {

		return Array.isArray(arr);
	}
    // 快速排序
	function quickSort(array) {
		if (!checkArray(array)) return;

		return _quickSort(array);
	}
	// 快速排序
	function _quickSort(array) {

		if (array.length < 2) return array;

		let pivot = array.splice(Math.floor(Math.random() * array.length), 1);

		let [left, right] = part(array, pivot);
			

		return _quickSort(left).concat(pivot, _quickSort(right));

	}
	// 数据放入
	function part(array, pivot) {

		let left = [], right = [];

		for (let i = 0; i < array.length; i++) {
			if (array[i] < pivot[0]) {

				left.push(array[i]);

			}else {

				right.push(array[i]);
			}
		}

		return [left, right];
	}
	console.log(quickSort([9, 2, 5, 6, 3, 8, 1, 3, 9, 4, 9, 2, 5, 6, 3, 8, 1, 3, 9, 4, 9, 2, 5, 6, 3, 8, 1, 3, 9, 4]));
```
### 归并排序
1. 数组中间索引(向下取整)进行分割，形成左右 2 个子数组
2. 不断对数组进行第一步，直到每个数组只剩 1 个元素
3. 从最底层开始，排序并合并 2 个左右子数组
4. 重复第三步，直到只剩一个数组

平均时间复杂度：O(n * log n) 空间复杂度：O(log n)
```
    // 是否是数组
	function checkArray(arr) {

		return Array.isArray(arr);
	}
    function mergeSort(array) {

		if (!checkArray) return;

		return _mergeSort(array);
	}

	function _mergeSort(array) {

		if (array.length < 2) return array;

		let middle = Math.floor(array.length / 2);

		let [left, right] = [array.slice(0, middle), array.slice(middle)];

		return merge(_mergeSort(left), _mergeSort(right));
	}

	function merge(left, right) {

		let result = [];
		// 循环判断左右子数组的最小值，依次放入 result 数组中
		while(left.length && right.length) {

			if (left[0] <= right[0]) {

				result.push(left.shift());

			}else {

				result.push(right.shift())
			}
		}
		// 剩余元素放入 result 数组中
		while(left.length) {
			result.push(left.shift());
		}
		// 剩余元素放入 result 数组中
		while(right.length) {
			result.push(right.shift());
		}

		return result;
	}

	console.log(mergeSort([9, 2, 5, 6, 3, 8, 1, 3, 9, 4, 9, 2, 5, 6, 3, 8, 1, 3, 9, 4, 9, 2, 5, 6, 3, 8, 1, 3, 9, 4]));
```
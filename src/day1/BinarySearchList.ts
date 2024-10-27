export default function bs_list(haystack: number[], needle: number): boolean {

    let left = 0;
    let right = haystack.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let curr = haystack[mid];

        if (curr === needle) {
            return true
        }

        if (curr < needle) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }


    return false
}

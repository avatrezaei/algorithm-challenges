function longestCommonSubsequence(str1, str2) {
    let m = str1.length;
    let n = str2.length;

    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // constructing the LCS
    let i = m, j = n;
    let lcs = "";

    while(i > 0 && j > 0) {
        if(str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        } else if(dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs;
}

console.log(longestCommonSubsequence("ABCDEF", "AEDNEK"));  // It will print "AED"

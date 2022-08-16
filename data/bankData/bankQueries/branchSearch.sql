SELECT bankName,
    branchCode,
    branchLocation
FROM banks AS bk
    LEFT JOIN branches AS br ON bk.bankCode = br.bankCode
WHERE bk.bankCode = 7135;
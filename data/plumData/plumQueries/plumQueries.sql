-- Fitting Query
SELECT plumFitting,plumSizeImperial,PlumType,plumGrade,plumBrand 
-- select all the fields for the data
FROM plumsizes AS ps
-- 1st inner join to plumFittingInfos then inner join other tables that fields in select statement
	INNER JOIN plumfittinginfos AS pfi ON ps.id = pfi.plumSizeId
    INNER JOIN plumtypes AS pt ON pt.id = pfi.plumTypeId
    INNER JOIN plumgrades AS pg ON pg.id = pfi.plumGradeId 
    INNER JOIN plumfittings AS pf ON pf.id = pfi.plumFittingId 
    INNER JOIN plumbrands AS pb ON pb.id = pfi.plumBrandId 
    -- list all condition
    WHERE plumSizeMetric = '63mm' AND plumGrade ="uPVC Drainage - fittings"
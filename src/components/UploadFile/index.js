import { Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const UploadFile = (props) => {
	const {
		value,
		accept,
		limitCount,
		multiple,
		onCallBack,
		renderBtn = null,
		otherConfig = {},
	} = props;
	const [fileList, setFileList] = useState([]);

	useEffect(() => {
		if (onCallBack) {
			onCallBack(fileList);
		}
	}, [fileList]);

	const beforeUpload = (file) => {
		if (limitCount === 1) {
			setFileList(file);
		} else {
			setFileList([...fileList, file]);
		}
		return false;
	};

	return (
		<Upload
			accept={accept}
			maxCount={limitCount}
			multiple={multiple}
			beforeUpload={beforeUpload}
			fileList={[]}
			{...otherConfig}
		>
			{renderBtn
				? _.isFunction(renderBtn)
					? renderBtn(value)
					: renderBtn
				: '上传'}
		</Upload>
	);
};
export default UploadFile;

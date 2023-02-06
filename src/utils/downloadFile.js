import {message} from "antd";


const downloadFromStream = ({result, type = ''}) => {
  try {
    if (!result) return;
    // 报错
    if (result?.data?.type === 'application/json') {
      const fileReader = new FileReader();
      const blob2 = new Blob([result?.data], {type: 'application/json'});
      fileReader.readAsText(blob2, 'utf-8');

      fileReader.onload = function () {
        const msg = JSON.parse(fileReader.result);

        message.error(msg?.msg);
      };
      return false;
    }
    // 正常情况下载文件
    const csvType = 'application/zip';
    console.log('下载文档', result,result?.data,csvType)
    const blob = new Blob([result?.data], {type: csvType}); // 指定格式
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = type + '_' + result.headers['content-disposition'].split('=')[1]; // 指定导出名称
    console.log(link.download);
    link.click();
    URL.revokeObjectURL(link.href);
    return true;
  } catch (e) {

  }
}

const downloadService = {
  downloadFromStream
}

export default downloadService;
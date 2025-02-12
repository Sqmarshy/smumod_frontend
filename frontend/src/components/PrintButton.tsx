import html2pdf from 'html2pdf.js';
import '../styles/PrintButton.css';

const PrintButton = () => {
  const handlePrint = () => {
    // 选择课表头部和课表网格
    const header = document.querySelector('.term-title');
    const grid = document.querySelector('.timetable-grid');
    
    if (header && grid) {
      // 创建一个临时容器，放置这两个部分
      const element = document.createElement('div');
      element.appendChild(header.cloneNode(true));  // 克隆并添加课表头部
      element.appendChild(grid.cloneNode(true));    // 克隆并添加课表网格

      // 为临时容器添加样式，使课表头部居中
      const style = document.createElement('style');
      style.innerHTML = `
        .term-title {
          text-align: center;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `;
      element.appendChild(style);

      const options = {
        filename: 'timetable.pdf',  // PDF文件名
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }, // 页面设置
      };

      html2pdf()
        .from(element) // 从临时容器生成PDF
        .set(options) 
        .save();
    }
  };

  return (
    <button className="print-btn" onClick={handlePrint}>
      ⬇️ Download
    </button>
  );
};

export default PrintButton;

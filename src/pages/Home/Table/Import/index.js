import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Table, Divider, Button, Input, Tag, message} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

import tableApiService from '@/services/tableApi';

// import ModalDelete from './ModalDelete';
import ModalCreate from './ModalCreate';
import './index.less';
// const SIZE = 10;
const DataTableNewImportList = () => {
    const [addModalVisible, setAddModalVisible] = useState(false); // 控制上传弹窗
    const [delId, setDelId] = useState(0); // 删除的记录id
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0); // 总数
    const [searchValue, setSearchValue] = useState(''); // 搜索的值
    const [tableData, setTableData] = useState([]);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        getTableData({});
    }, []);

    useEffect(() => {
        getTableData({currentPage});
    }, [currentPage]);

    // 获取列表数据
    const getTableData = async ({currentPage = 1, searchValue = ''}) => {
        const data = {
            page: currentPage,
            size: pageSize,
            md5: searchValue,
        };
        try {
            const res = await tableApiService.tmpTableList(data);
            if (res?.code === 10200 && res?.result) {
                setTableData(res?.result?.data);
                setTotal(res?.result.total);
                setCurrentPage(currentPage);
            }
        } catch (err) {
            message.error(err + '获取数据失败');
        }
    };

    // 关闭新建弹窗
    const closeAddModal = () => setAddModalVisible(false);

    // 换页
    const pageChange = (page, pageSize) => {
        setPageSize(pageSize);
        setCurrentPage(page);
    };

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '描述',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true,
            width: 250,
        },

        {
            title: '创建时间',
            dataIndex: 'created_time',
            key: 'created_time',
        },
        {
            title: '操作',
            dataIndex: '',
            key: 'x',
            width: 120,
            render: (text, record) => {
                const url = `/home/apiDetail?type=function&id=${record.id}`;
                return (
                    <div>
						<span className="tool-text">
							<Link to={url}>详情</Link>
						</span>
                        <Divider type="vertical"/>
                        <span
                            className="tool-text"
                            onClick={() => {
                                setDelId(record.id);
                            }}
                        >
							删除
						</span>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="functionApi-Root">
            <h2>导入的数据表结构管理</h2>
            <Divider/>

            <div className="optionTools">
                <Button type="primary" onClick={()=>setAddModalVisible(true)}>
                    上传待解析的文档
                </Button>
                <div className="search-box">
                    <Input
                        placeholder="请输入搜索的关键字"
                        suffix={<SearchOutlined/>}
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e?.target?.value);
                        }}
                        onPressEnter={() => {
                            getTableData({
                                currentPage,
                                searchValue,
                            });
                        }}
                        allowClear
                    />
                    <Button
                        type="primary"
                        className="search-btn"
                        onClick={() => {
                            getTableData({
                                currentPage,
                                searchValue,
                            });
                        }}
                    >
                        搜索
                    </Button>
                </div>
            </div>
            <Table
                className="tableRoot"
                columns={columns}
                bordered
                dataSource={tableData}
                rowKey={(record) => record?.id}
                pagination={{
                    current: currentPage,
                    pageSize: pageSize,
                    total: total,
                    onChange: pageChange,
                    showSizeChanger: true,
                    pageSizeOptions: [10, 20, 100, 500]
                }}
            />

            {/*<ModalDelete*/}
            {/*    isModalOpen={delModalVisible}*/}
            {/*    id={delId}*/}
            {/*    handleCancel={closeDelModal}*/}
            {/*    getTableData={getTableData}*/}
            {/*/>*/}
            <ModalCreate
                isModalOpen={addModalVisible}
                handleCancel={closeAddModal}
                getTableData={getTableData}
            />
        </div>
    );
};
export default DataTableNewImportList;

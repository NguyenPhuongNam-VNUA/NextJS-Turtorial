'use client'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

interface IProps {
  blogs: IBlog[];
}

/*
- Hiểu đầy đủ là như này
props = {
    blogs: [
        // các IBlog
    ]
}

- trong jsx, tsx ví dụ 
  <AppTable 
    blogs={data} 
    title="Danh sách bài viết"
    showAuthor={true}
    pageSize={10}
  /> react có thể coi như 
  AppTable({
    blogs: data,
    title: "Danh sách bài viết",
    showAuthor: true,
    pageSize: 10
  }) 
  nên react gói hết các tham số đó thành props object:
  props
    ├── blogs
    ├── title
    ├── showAuthor
    └── pageSize
*/
const AppTable = (props: IProps) => {
  const {blogs} = props; // Destructuring để lấy blogs từ props: blogs = props.blogs
  console.log(">>> Check props: ", blogs);
  
  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Table Blogs</h4>
        <Button variant="secondary">Add New</Button>
      </div>

      <Table striped bordered hover responsive className="align-middle">
        <thead>
          <tr>
            <th className="text-center" style={{ width: "60px" }}>No</th>
            <th>Title</th>
            <th>Author</th>
            <th className="text-center" style={{ width: "220px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => {
            return (
              <tr key={blog.id}>
                <td className="text-center">{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td className="text-center">
                  <Button variant="primary" size="sm">
                    View
                  </Button>
                  <Button variant="warning" size="sm" className="mx-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default AppTable;

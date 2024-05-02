import { useState } from 'react'
import DataTable from 'react-data-table-component';
import PaginationComponent from '../../components/pagination/PaginationComponent'
import { MdAdd } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import PrimaryButton from '../../components/button/PrimaryButton'
import { format } from 'date-fns';
import Modal from '../../components/modal/Modal';
import OutlineButton from '../../components/button/OutlineButton';
import { IoMdSearch } from 'react-icons/io';

const data = [
  {
    _id: 1,
    date: new Date("12-2-2024"),
    name: 'Rajib Lochan Nandi',
    email: 'adityanandi550@gmail.com',
    status: 'Active',
  },
  {
    _id: 3,
    date: new Date("12-2-2024"),
    name: 'Rajib Lochan Nandi',
    email: 'adityanandi550@gmail.com',
    status: 'Active',
  },
  {
    _id: 1,
    date: new Date("12-2-2024"),
    name: 'Rajib Lochan Nandi',
    email: 'adityanandi550@gmail.com',
    status: 'Active',
  },
  {
    _id: 1,
    date: new Date("12-2-2024"),
    name: 'Rajib Lochan Nandi',
    email: 'adityanandi550@gmail.com',
    status: 'Active',
  },
  {
    _id: 1,
    date: new Date("12-2-2024"),
    name: 'Rajib Lochan Nandi',
    email: 'adityanandi550@gmail.com',
    status: 'Active',
  },

]

const UserPage = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [workingRow, setworkingRow] = useState(null)
  const columns = [
    {
      name: 'ID',
      width: "50px",
      hide: "md",
      center: "true",
      selector: row => row._id,
    },
    {
      name: 'Date',
      selector: row => format(row.date, "dd-mm-yyyy"),
    },
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Email',
      hide: "md",
      center: "true",
      selector: row => row.email,
    },
    {
      name: 'Status',
      center: "true",
      hide: "md",
      selector: row => row.status,
    },
    {
      name: 'Action',
      hide: "md",
      width: "fit-content",
      selector: row => <RiDeleteBinLine onClick={() => callDelete(row)} className='cursor-pointer bg-inputBox p-2 box-content rounded-lg' />,
    },
  ];

  const triggerDelete = () => {
    // write delete function here
    console.log(workingRow);
  }

  function callDelete(currentRow) {
    setworkingRow(currentRow);
    setDeleteModal(true);
  }

  const closeModal = () => {
    setworkingRow(null);
    setDeleteModal(false);
  }

  return (
    <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
      <div className='flex gap-5 mb-5 flex-col md:flex-row items-center'>
        <div className='relative bg-white w-full p-5 rounded-lg flex gap-5'>
          <h3 className='text-xl font-bold'>Users</h3>
          <div className='lg:absolute mt-5 md:mt-0 right-5 bottom-5 flex items-center'>
            <input type='text' className='h-8 focus:outline-none w-full md:max-w-[200px]' placeholder='Type here to search' />
            <IoMdSearch className='text-2xl ' />
          </div>
        </div>
        <div className='space-y-2 flex-shrink-0 flex flex-col sm:flex-row md:flex-col w-fit ms-auto items-center space-x-2'>
          <PrimaryButton linkPage={'/user/add-user'}>
            <MdAdd className='text-xl' />
            <p>Add Users</p>
          </PrimaryButton>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={data}
        customStyles={{
          responsiveWrapper: { style: { borderRadius: "10px" } },
          rows: {
            style: {
              minHeight: '52px',
              paddingInline: "6px",
              '@media (max-width: 500px)': {
                paddingInline: '20px',
              },
              '&:is(:last-of-type)': {
                paddingBottom: "15px"
              },
            }
          }, headRow: {
            style: {
              padding: "6px",
              '@media (max-width: 500px)': {
                paddingInline: "20px"
              },
            }
          },
          headCells: { style: { width: 'fit-content', padding: "0px" } },
          cells: { style: { width: 'fit-content', padding: "0px" } }
        }}
        responsive
      />

      <PaginationComponent totalPage={3} currentPage={1} />
      <Modal showModal={deleteModal} closeModal={closeModal}>
        <h3 className='font-bold text-md mt-5'>Warning</h3>
        <p className='text-neutral-500 my-10'>Do you want to  This media?</p>
        <div className='mb-5 flex gap-5'>
          <PrimaryButton triggerFunction={triggerDelete}>
            Delete
          </PrimaryButton>
          <OutlineButton triggerFunction={closeModal}>
            Cancel
          </OutlineButton>
        </div>
      </Modal>
    </div>
  )
}

export default UserPage

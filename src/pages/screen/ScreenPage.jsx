import React from 'react'
import { MdAdd } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import PrimaryButton from '../../components/button/PrimaryButton'
import OutlineButton from '../../components/button/OutlineButton'
import DataTable from 'react-data-table-component';
import PaginationComponent from '../../components/pagination/PaginationComponent'
const columns = [
  {
    name: 'ID',
    width: "50px",
    hide: "md",
    center: "true",
    selector: row => row._id,
  },
  {
    name: 'Code',
    selector: row => row.code,
  },
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Mac',
    hide: "md",
    center: "true",
    selector: row => row.mac,
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
    selector: row => row.action,
  },
];

const data = [
  {
    _id: 1,
    code: 8465,
    name: 'Emulator 2',
    mac: 'fgc.908.908.69.090',
    status: 'Active',
    action: <RiDeleteBinLine className='cursor-pointer bg-inputBox p-2 box-content rounded-lg' />
  },
  {
    _id: 1,
    code: 8465,
    name: 'Emulator 2',
    mac: 'fgc.908.908.69.090',
    status: 'Active',
    action: <RiDeleteBinLine className='cursor-pointer bg-inputBox p-2 box-content rounded-lg' />
  },
  {
    _id: 1,
    code: 8465,
    name: 'Emulator 2',
    mac: 'fgc.908.908.69.090',
    status: 'Active',
    action: <RiDeleteBinLine className='cursor-pointer bg-inputBox p-2 box-content rounded-lg' />
  },
  {
    _id: 1,
    code: 8465,
    name: 'Emulator 2',
    mac: 'fgc.908.908.69.090',
    status: 'Active',
    action: <RiDeleteBinLine className='cursor-pointer bg-inputBox p-2 box-content rounded-lg' />
  },
  {
    _id: 1,
    code: 8465,
    name: 'Emulator 2',
    mac: 'fgc.908.908.69.090',
    status: 'Active',
    action: <RiDeleteBinLine className='cursor-pointer bg-inputBox p-2 box-content rounded-lg' />
  },
]

const ScreenPage = () => {
  return (
    <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
      <div className='flex gap-5 mb-5 flex-col md:flex-row items-center'>
        <div className=' bg-white w-full p-5 rounded-lg h-36'>
          <h3 className='text-2xl font-medium'>Screen</h3>
        </div>
        <div className='space-y-2 flex-shrink-0 flex flex-col sm:flex-row md:flex-col w-fit ms-auto items-center space-x-2'>
          <PrimaryButton linkPage={'/screen/add-screen'}>
            <MdAdd className='text-xl' />
            <p>Add Screen</p>
          </PrimaryButton>

          <OutlineButton>
            <RiDeleteBinLine className='text-xl text-black/50' />
            <div className='text-xs text-black/50 text-center'>
              <p>0/1</p>
              <p>Delete Selected</p>
            </div>
          </OutlineButton>
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
    </div>
  )
}

export default ScreenPage
ScreenPage
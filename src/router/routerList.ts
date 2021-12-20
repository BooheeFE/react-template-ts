export interface RouterObj {
  path: string;
  src: string;
  children?: RouterObj[];
}
const list: RouterObj[] = [
  {
    path: '/',
    src: 'Dashboard'
  },
  {
    path: 'about',
    src: 'AboutPage'
  },
  {
    path: 'childrenDemo',
    src: 'Children',
    children: [
      {
        path: 'childrenDemoOne',
        src: 'Children/OneChildren'
      }
    ]
  }
];
export default list;

## Tasks
- Modal
- Pagination
- Older works button
- Change layout 

## Questions ?
- Split Components folder
- Comments
- Links

## Information 
- https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- https://nextjs.org/docs/app/api-reference/file-conventions/default
https://tailwindcss.com/docs/size






## Draft


first 9 items. onClick fetch next 9 items in db.
algorithm: 
currentPage = 2 * 9 = 18 
itemsPerPage = 9
maxValue = currentPage * itemsPerPage
minValue = maxValue - itemsPerPage
than 
slice range minValue - (maxValue - 1)
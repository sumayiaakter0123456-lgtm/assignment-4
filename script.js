let interviewList = []
let rejectedList = []


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount')
const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
function caleculateCount() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
caleculateCount()
function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

    allFilterBtn.classList.add('bg-gray-100', 'text-gray-500')
    interviewFilterBtn.classList.add('bg-gray-100', 'text-gray-500')
    rejectedFilterBtn.classList.add('bg-gray-100', 'text-gray-500')
    console.log(id);
    const selected = document.getElementById(id)
    console.log(selected);
    selected.classList.remove('bg-gray-100', 'text-gray-500')
    selected.classList.add('bg-blue-500', 'text-white')
}
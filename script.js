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
const filterSection = document.getElementById('filtered-section')
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

    const selected = document.getElementById(id)

    selected.classList.remove('bg-gray-100', 'text-gray-500')
    selected.classList.add('bg-blue-500', 'text-white')
}


mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const mobileName = parenNode.querySelector('.mobileName').innerText
        const heroName = parenNode.querySelector('.heroName').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText
        const cardInfo = {
            mobileName,
            heroName,
            status,
            notes
        }
        const mobileExist = interviewList.find(item => item.mobileName == cardInfo.mobileName)
        parenNode.querySelector('.status').innerText = 'Interview'
        if (!mobileExist) {
            interviewList.push(cardInfo)

        }
        renderInterview()
    }
})

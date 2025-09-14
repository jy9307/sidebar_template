'use client';

import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    title: '총 매출',
    value: '₩45,231,000',
    change: '+20.1%',
    changeType: 'positive' as const,
    icon: DollarSign,
  },
  {
    title: '신규 사용자',
    value: '2,350',
    change: '+180.1%',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    title: '주문 수',
    value: '12,234',
    change: '+19%',
    changeType: 'positive' as const,
    icon: TrendingUp,
  },
  {
    title: '활성 세션',
    value: '573',
    change: '-12%',
    changeType: 'negative' as const,
    icon: Activity,
  },
];

const recentActivities = [
  { id: 1, action: '새로운 주문이 생성되었습니다', time: '2분 전', type: 'order' },
  { id: 2, action: '사용자가 회원가입했습니다', time: '5분 전', type: 'user' },
  { id: 3, action: '결제가 완료되었습니다', time: '10분 전', type: 'payment' },
  { id: 4, action: '새로운 리뷰가 작성되었습니다', time: '15분 전', type: 'review' },
  { id: 5, action: '재고가 부족합니다', time: '20분 전', type: 'warning' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 통계 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              {stat.changeType === 'positive' ? (
                <ArrowUpRight className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ml-1 ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">지난 달 대비</span>
            </div>
          </div>
        ))}
      </div>

      {/* 차트 영역 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 매출 차트 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">매출 추이</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">차트 데이터</p>
            </div>
          </div>
        </div>

        {/* 사용자 활동 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 활동</h3>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'order' ? 'bg-blue-500' :
                  activity.type === 'user' ? 'bg-green-500' :
                  activity.type === 'payment' ? 'bg-purple-500' :
                  activity.type === 'review' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 추가 정보 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">인기 상품</h3>
          <div className="space-y-3">
            {['상품 A', '상품 B', '상품 C'].map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{product}</span>
                <span className="text-sm font-medium text-gray-900">{Math.floor(Math.random() * 100)}개</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">할 일</h3>
          <div className="space-y-3">
            {['재고 확인', '고객 문의 답변', '월간 보고서 작성'].map((task, index) => (
              <div key={index} className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">{task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">빠른 액션</h3>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              새 주문 추가
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
              사용자 초대
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
              보고서 생성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

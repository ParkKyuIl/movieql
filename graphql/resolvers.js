// 쿼리나 데이터 뮤테이션을 요청받으면 리졸버를 먼저 살핀다.

// 스키마에서 내 데이터의 구조를 정의하고
// 리졸버에서 operation(질문)을 resolve(해결)하는 함수를 만든다.
// 
import { getMovie } from "./db";

const resolvers = {
    Query: {
        movies: (_,{ rating,limit }) => getMovie(limit,rating)
    }
};
 
export default resolvers
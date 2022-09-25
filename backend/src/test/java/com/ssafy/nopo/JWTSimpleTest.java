package com.ssafy.nopo;

public class JWTSimpleTest {

//    private void printTeoken(String token){
//        String[] tokens = token.split("\\.");
//        System.out.println("header: " + new String(Base64.getDecoder().decode(tokens[0])));
//        System.out.println("body: " + new String(Base64.getDecoder().decode(tokens[1])));
//    }

//    @DisplayName("1. jjwt를 이용한 토큰 테스트")
//    @Test
//    void test_1(){
//        String okta_token = Jwts.builder().addClaims(
//                Map.of("name", "minju", "price", 3000)
//        ).signWith(SignatureAlgorithm.HS256, "minju")
//                .compact();
//        System.out.println(okta_token);
//        printTeoken(okta_token);
//    }

//    @DisplayName("2. java-jwt를 이용한 토큰 테스트")
//    @Test
//    void test_2() {
//        byte[] SEC_KEY = DatatypeConverter.parseBase64Binary("jongwon");
//
//        String oauth0_token = JWT.create().withClaim("name", "jongwon").withClaim("price", 3000)
//                .sign(Algorithm.HMAC256("SEC_KEY"));
//
//        System.out.println(oauth0_token);
//        printTeoken(oauth0_token);
//
//        DecodedJWT verified = JWT.require(Algorithm.HMAC256(SEC_KEY)).build().verify(oauth0_token);
//        System.out.println(verified.getClaims());
//
//        Jws<Claims> tokenInfo = Jwts.parser().setSigningKey(SEC_KEY).parseClaimsJws(oauth0_token);
//        System.out.println(tokenInfo);
//    }

//    @DisplayName("3. 만료 시간 테스트")
//    @Test
//    void test_3() throws InterruptedException {
//        final Algorithm AL = Algorithm.HMAC256("jongwon");
//        String token = JWT.create().withSubject("a1234")
//                .withNotBefore(new Date(System.currentTimeMillis() + 1000))
//                .withExpiresAt(new Date(System.currentTimeMillis() + 3000))
//                .sign(AL);
//
//        try {
//            DecodedJWT verify = JWT.require(AL).build().verify(token);
//            System.out.println(verify.getClaims());
//        } catch(Exception e){
//            System.out.println("유효하지 않은 토큰입니다...");
//            DecodedJWT decode = JWT.decode(token);
//            System.out.println(decode.getClaims());
//        }
//    }

}

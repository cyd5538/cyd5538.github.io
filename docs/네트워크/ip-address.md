---
sidebar_position: 4
---

# IP 주소

## ARP
컴퓨터와 컴퓨터 간의 통신은 흔히들 IP 주소 기반으로 통신한다고 알고 있지만 정확히 이야기하자면 IP 주소에서 ARP를 통해 MAC 주소를 찾아 MAC 주소를 기반으로 통신합니다.

ARP란 IP 주소로부터 MAC 주소를 구하는 IP와 MAC 주소의 다리 역할을 하는 프로토콜입니다.

ARP를 통해  가상 주소인 IP 주소를 실제 주소인 MAC 주소로 변환합니다. 이와 반대로 RARP를 통해 실제 주소인 MAC 주소를 가상 주소인 IP 주소로 변환하기도 합니다.

ARP의 주소를 찾는 과정

:::note 브로드캐스트
송신 호스트가 전송한 데이터가 네트워크에 연결된 모든 호스트에 전송하는 방식
:::

:::note 유니캐스트
고유 주소로 식별된 하나의 네트워크 목적지에 1:1로 데이터를 전송하는 방식
:::

## 홉바이홉 통신
IP 주소를 통해 통신하는 과정을 홉바이홉 통신이라고 합니다. 

여기서 홉이란 영어 뜻 자체로는 건너뛰는 모습을 의미합니다. 이는 통신망에서 각 패킷이 여러 개의 라우터를 거너가는 모습을 비유적으로 표현한 것입니다. 각각의 라우터에 있는 라우팅 테이블의 IP를 기반으로 패킷을 전달하고 다시 전달해나갑니다.

즉, 통신 장치에 있는 '라우팅 테이블'의 IP를 통해 시작 주소부터 시작하여 다음 IP로 계속해서 이동하는 '라우팅' 과정을 거쳐 패킷이 최종 목적지까지 도달하는 통신을 말합니다.

:::note 라우팅
IP 주소를 찾아가는 과정
:::

### 라우팅 테이블
송신지에서 수신지까지 도달하기 위해 사용되며 라우터에 들어가 있는 목적지 정보들과 그 목적지로 가기위한 방법이 들어가 있는 리스트를 뜻합니다. 라우팅 테이블에는 게이트웨이와 모든 목적지에 대해 해당 목적지에 도달하기 위해 거쳐야 할 다음 라우터의 정보를 가지고 있습니다.

### 게이트웨이
게이트웨이는 서로 다른 통신망, 프로토콜을 사용하는 네트워크 간의 통신을 가능하게 하는 관문 역할을 하는 컴퓨터나 소프트웨어를 두루 일컫는 용어입니다.

사용자는 인터넷에 접속하기위해 수많은 톨게이트인 게이트웨으를 거쳐야 하며 게이트웨이는 서로 다른 네트워크상의 통신 프로토콜을 변환해주는 역할을 하기도 합니다.

## IP 주소 체계
IP주소는 IPv4와 IPv6로 나뉩니다. IPv4는 32비트를 8비트 단위로 점을 찍어 표기하며, `123.45.67.89` 같은 방식으로 IP 주소를 나타냅니다. IPv6는 16비트 단위로 점을 찍어 표기하며, `2001:db8::ff00:42:8329` 같은 방식으로 IP 주소를 나타냅니다.

추세는 IPv6로 가고 있지만 현재 가장 많이 쓰이는 주소 체계는 IPv4입니다.

### 클래스 기반 할당 방식
과거 IP 주소 체계는 A, B, C, D, E 다섯 개의 클래스로 구분하는 클래스 기반 할당 방식을 사용했습니다. 앞부분을 네트워크 주소, 뒷부분을 컴퓨터에 부여하는 호스트 주소로 구분하여 사용했습니다.

- 클래스 A: 대규모 네트워크에 사용 (0.0.0.0 ~ 127.255.255.255, 네트워크 주소 8비트, 호스트 주소 24비트)
- 클래스 B: 중간 규모 네트워크에 사용 (128.0.0.0 ~ 191.255.255.255, 네트워크 주소 16비트, 호스트 주소 16비트)
- 클래스 C: 소규모 네트워크에 사용 (192.0.0.0 ~ 223.255.255.255, 네트워크 주소 24비트, 호스트 주소 8비트)
- 클래스 D: 멀티캐스트 통신용 (224.0.0.0 ~ 239.255.255.255)
- 클래스 E: 연구 및 실험용 (240.0.0.0 ~ 255.255.255.255)

현재는 IP 주소 고갈 문제로 인해 클래스 기반 방식 대신 **CIDR** (Classless Inter-Domain Routing, 무등급 도메인 간 라우팅) 방식이 주로 사용됩니다. 이는 서브넷 마스크를 통해 IP 주소를 유연하게 할당하는 방식입니다.

### IP 주소를 이용한 위치 정보
IP 주소는 인터넷에서 사용하는 네트워크 주소이기 때문에 이를 통해 사용자 위치 정보를 대략적으로 파악할 수 있습니다. IP 주소 기반 위치 추적 시스템은 보통 다음과 같은 단계를 거칩니다.

1. **ISP(인터넷 서비스 제공업체) 데이터 활용**: 각 IP 주소 대역은 특정 ISP가 관리하며, 지역별로 할당됩니다.
2. **GeoIP 데이터베이스 활용**: MaxMind, IP2Location 등의 서비스에서 제공하는 데이터베이스를 활용해 국가, 도시, 지역 정보를 조회합니다.
3. **IP 주소 대역 분석**: 특정 기관이나 기업이 보유한 IP 대역 정보를 통해 어느 지역에서 접속했는지 대략적인 범위를 알아냅니다.

IP 주소를 통해 도시나 국가 정도의 위치를 파악할 수 있지만, 정확한 주소까지 알아내는 것은 불가능합니다. 이는 VPN, 프록시 서버, 이동 네트워크 등을 사용하면 쉽게 우회할 수 있기 때문입니다.
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  PolyLine,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  var inc = 0;
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <Svg
        width="257"
        height="257"
        viewBox="0 0 257 257"
        fill="none"
        id="svg8877"
      >
        <Path
          d="M5.5 57 
        Q 40 50 50 57
        Q 65 47 90 53  "
          fill="#DFD855"
          stroke="#D9D9D9"
          id="Piel"
        />
        <Path
          d="M34 50.5 
          C32.8 50.1 14.3333 54.6667 5.5 57
          V71
          C14.3333 71.5 32.7 72.5 35.5 72.5
          C38.3 72.5 47.3333 69.5 51.5 68
          C56.1667 69 67 71 73 71C79 71 89.1667 69 93.5 68L96 97.5C96 97.5 94.4386 117 93.5 123.5C92.5614 130 93.9 151.4 93.5 155C93.1 158.6 97.6667 182.167 100 193.5C100 196.167 99.6 202.1 98 204.5C96.4 206.9 97.3333 229.5 98 240.5L100 257H115.5C116.5 244.667 118.5 219.4 118.5 217C118.5 214.6 116.5 205.667 115.5 201.5C118.667 189.833 125.3 166 126.5 164C127.7 162 129 150.833 129.5 145.5V40.5H123.5C119.167 40.3333 110 40.1 108 40.5C106 40.9 95.8333 47.3333 91 50.5C84 49.1667 69.5 46.5 67.5 46.5C65.5 46.5 54.6667 52.5 49.5 55.5C46.3333 54 39.2 50.9 36 50.5Z M222.5 50.5C225.7 50.1 244.167 54.6667 253 57V71C244.167 70.5 225.8 72.5 223 72.5C220.2 72.5 211.167 69.5 207 68C202.333 69 191.5 71 185.5 71C179.5 71 169.333 69 165 68L162.5 97.5C162.5 97.5 164.061 117 165 123.5C165.939 130 164.6 151.4 165 155C165.4 158.6 160.833 182.167 158.5 193.5C158.5 196.167 158.9 202.1 160.5 204.5C162.1 206.9 161.167 229.5 160.5 240.5L158.5 257H143C142 244.667 140 219.4 140 217C140 214.6 142 205.667 143 201.5C139.833 189.833 133.2 166 132 164C130.8 162 129.5 150.833 129 145.5V40.5H135C139.333 40.3333 148.5 40.1 150.5 40.5C152.5 40.9 162.667 47.3333 167.5 50.5C174.5 49.1667 189 46.5 191 46.5C193 46.5 203.833 52.5 209 55.5C212.167 54 219.3 50.9 222.5 50.5Z"
          fill=""
          id="Grasa"
        />
        <G id="Huesos">
          <Path
            d="M106.385 206.84L105 202.28L108.231 200L111 202.28L110.077 208.55L111 253.58L107.308 257L105 254.72L106.385 206.84Z"
            fill="#D9D9D9"
            id="TibiaDerecha"
          />
          <Path
            d="M149.385 206.84L148 202.28L151.231 200L154 202.28L153.077 208.55L154 253.58L150.308 257L148 254.72L149.385 206.84Z"
            fill="#D9D9D9"
            id="TibiaIzquierda"
          />
          <Path
            d="M120 139.091L114 133L104.5 134.305L106.5 145.617L104.5 188.253L104 196.955L109 200L114 189.123V145.617L120 139.091Z"
            fill="#D9D9D9"
            id="FemurDerecho"
          />
          <Path
            d="M138 139.091L144 133L153.5 134.305L151.5 145.617L153.5 188.253L154 196.955L149 200L144 189.123V145.617L138 139.091Z"
            fill="#D9D9D9"
            id="FemurIzquierdo"
          />
          <Path
            d="M118 110H109.5L112.5 130L128 143V115H122.5L118 110Z M139 110H147.5L144.5 130L129 143V115H134.5L139 110Z"
            fill="#D9D9D9"
            id="Cinto"
          />

          <Ellipse
            cx="130"
            cy="19.5"
            rx="16"
            ry="19.5"
            fill="#D9D9D9"
            id="Craneo"
          />
          <Path d="M 135 85 H 125 V 115 H 135  z" fill="#D9D9D9" id="Columna" />
          <Path
            d="M 109 47L98 55V60.5L109 96H118L128.5 86.5V47H109Z M148.5 47L159.5 55V60.5L148.5 96H139.5L129 86.5V47H148.5Z"
            fill="#D9D9D9"
            id="Pulmones"
          />
          <Path
            d="M 165 55 L210 60 v5 L 165 60 z"
            fill="#D9D9D9"
            stroke="#D9D9D9"
            id="HuezoBrazoIzquierdo"
          />
          <Path
            d="M 95 55 L50 60 v5 L 95 60 z"
            fill="#D9D9D9"
            stroke="#D9D9D9"
            id="HuezoBrazoDerecho"
          />
          <Path
            d="M 215 60 L300 60 v5 L215 65 z"
            fill="#D9D9D9"
            stroke="#D9D9D9"
            id="HuezoAnteBrazoIzquierdo"
          />
          <Path
            d="M 45 60 L0 60 v5 L 45 65 z"
            fill="#D9D9D9"
            stroke="#D9D9D9"
            id="HuezoAnteBrazoDerecho"
          />
        </G>
        <G id="Musculos">
          <Path
            d={"M122 115 Q "+(120 - inc)+" 127.381 129 141 Q "+(136+inc)+" 130 135 115 L132 118.714 H125.667Z"}
            fill="#C96363"
            stroke="#A12C2C"
            id="AbdomenBajo" //Path8775
          />
          <Path
            d={"M154.5 123 L151 127 L156.968 169.577 Q"+(158+inc)+ " 153 156. 122Z"}
            stroke="#A12C2C"
            fill="#C96363"
            id="MusculoPequeñoPierna"
          />
          <Path
            d={"M136 139.507 Q"+(140.214-inc)+" 160.123 148.143 198 Q"+(153+inc)+" 175.466 145.107 128Z"}
            fill="#C96363"
            stroke="#A12C2C"
            id="Pierna"
          />
        <Path
          d={"M153.7 200 Q"+(146-inc)+" 215.957 153.7 253 Q"+(157+inc)+" 236.473 157 200 L153.7 200 Z"}
          fill="#C96363"
          stroke="#A12C2C"
          id="Pantorrilla"
        />
        <Path
          d={"M145.828 49.5 H136 Q"+(157.207+inc/2)+" "+(46-inc/2)+" 166 56H160.828C160.414 56 158.241 54.3333 157.207 53.5L145.828 49.5Z"}
          fill="#C96363"
          stroke="#A12C2C"
          id="hombro izquierdo"
        />
        <Path
          d={"M137 44.5 Q138.5 "+(42-inc/2)+" 148.5 43z"}
          fill="#C96363"
          stroke="#A12C2C"
          id="espalda"
        />   
        <Path
          d={"M143 83 Q"+(141.105+inc/4)+" "+(93.3433+inc/4)+" 131 93.8358 Q"+(131-inc/4)+" "+(84.9701-inc/4)+" 143 83"}
          fill="#C96363"
          stroke="#A12C2C"
          id="ab1"
        />  
        <Path
          d={"M142.368 96.2985 Q"+(131-inc/4)+" "+(96.2985-inc/4)+" 131 103.7463 Q"+(142.368+inc/4)+" "+(99.7463+inc/2)+" 142.368 96.2985z"}
          fill="#C96363"
          stroke="#A12C2C"
          id="ab2"
        />   
        <Path
          d={"M131 106.149L141.737 105.657 Q"+(141.737+inc/3)+" "+(109.104+inc/2)+" 131 116 V106.149Z"}
          fill="#C96363"
          stroke="#A12C2C"
          id="ab3"
        />
        
        <Path
          d={"M132 58.25V78.0833 Q"+(152.429+inc)+" "+(69.9167+inc)+" 158 58.25 Q"+(145.619+inc)+" "+(53-inc/3)+" 136.333 53Z"}
          fill="#C96363"
          stroke="#A12C2C"
          id="pectoral"
        />
        <Path
          d={"M175 57.5 L169 54 Q192 "+(50-inc)+" 207.5 59.5L175 57.5Z"}
          fill="#C96363"
          id="bicep"          
          stroke="#A12C2C"
        />
        <Path
          d={"M174 62.5L169 57.5L174 64.5 Q188 "+(66.5+inc)+" 206 63.5L188 61L174 62.5Z"}
          fill="#C96363"
          id="Path8805"    
          stroke="#A12C2C"
        />
        <Path
          d={"M253 61 L230.5 62.5L212 59 Q222.5 "+(55.5 - inc)+" 253 61Z"}
          fill="#C96363"
          id="Path8811" 
          stroke="#A12C2C"
        />
        <Path
          d={"M253 67.5L226.5 64.5L212 66 Q222.5 "+(69.5+inc)+" 253 67.5"}
          fill="#C96363"
          id="Path8813"          
          stroke="#A12C2C"
        />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

platform :ios, '9.0'

target 'iOSRN' do 

    # 'node_modules'目录一般位于根目录中
    # 但是如果你的结构不同，那你就要根据实际路径修改下面的`:path`
    pod 'React', :path => './RNComponent/node_modules/react-native', :subspecs => [
    'Core',
    'RCTText',
    'RCTImage',
    'RCTActionSheet',
    'RCTGeolocation',
    'RCTNetwork',
    'RCTSettings',
    'RCTVibration',
    'BatchedBridge',
    'RCTWebSocket',
    'ART',
    'RCTAnimation',
    'RCTBlob',
    'RCTCameraRoll',
    'RCTPushNotification',
    'RCTLinkingIOS',
    # 在这里继续添加你所需要的模块
    ]
    
    # 如果你的RN版本 >= 0.42.0，请加入下面这行
    pod "yoga", :path => "./RNComponent/node_modules/react-native/ReactCommon/yoga"

end

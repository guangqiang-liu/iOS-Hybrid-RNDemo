//
//  RCTShopModules.m
//  iOSRN
//
//  Created by 刘光强 on 2018/3/3.
//  Copyright © 2018年 刘光强. All rights reserved.
//

#import "RCTShopModules.h"
#import "RCTBridge.h"
@implementation RCTShopModules

RCT_EXPORT_MODULE(RTShopModules)

RCT_EXPORT_METHOD(RNChangeTitle:(NSString *)title) {
    NSLog(@"RN传入原生界面的数据为:%@",title);
    // 主要这里必须使用主线程发送,不然有可能失效
    dispatch_async(dispatch_get_main_queue(), ^{
        [[NSNotificationCenter defaultCenter]postNotificationName:@"RNChangeTitle" object:nil userInfo:@{@"title": title}];
    });
}

@end

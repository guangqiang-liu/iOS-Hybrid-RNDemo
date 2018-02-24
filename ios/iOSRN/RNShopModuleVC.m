//
//  RNShopModuleVC.m
//  iOSRN
//
//  Created by 刘光强 on 2018/2/23.
//  Copyright © 2018年 刘光强. All rights reserved.
//

#import "RNShopModuleVC.h"
#import "RCTRootView.h"

@interface RNShopModuleVC ()

@end

@implementation RNShopModuleVC

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    NSDictionary *params = @{@"componentName":@"ShopApp1", @"args":@{@"params":@"这是原生传递的参数"}};

    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"iOSRN"
                                                  initialProperties:params
                                                      launchOptions:nil];
    self.view = rootView;
}


@end

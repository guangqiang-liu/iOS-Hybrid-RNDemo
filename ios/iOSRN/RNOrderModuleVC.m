//
//  RNOrderModuleVC.m
//  iOSRN
//
//  Created by 刘光强 on 2018/2/23.
//  Copyright © 2018年 刘光强. All rights reserved.
//

#import "RNOrderModuleVC.h"
#import "RCTRootView.h"

@interface RNOrderModuleVC ()

@end

@implementation RNOrderModuleVC

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"OrderApp"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    self.view = rootView;
}


@end
